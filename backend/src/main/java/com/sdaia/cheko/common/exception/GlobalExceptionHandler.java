package com.sdaia.cheko.common.exception;

import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(
            MethodArgumentNotValidException ex) {

        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult().getFieldErrors().forEach(error -> {
            errors.put(error.getField(), error.getDefaultMessage());
        });

        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<Map<String, String>> handleHttpMessageNotReadableException(
            HttpMessageNotReadableException ex) {

        Map<String, String> errors = new HashMap<>();

        // Check if it's an InvalidFormatException (type conversion error)
        if (ex.getCause() instanceof InvalidFormatException) {
            InvalidFormatException cause = (InvalidFormatException) ex.getCause();

            // Loop through the path to find which field caused the error
            if (!cause.getPath().isEmpty()) {
                String fieldName = cause.getPath().getFirst().getFieldName();
                String targetType = cause.getTargetType().getSimpleName();

                // Create specific error messages based on field and type
                if ("Long".equals(targetType)) {
                    errors.put(fieldName, fieldName + " must be a valid number");
                } else {
                    errors.put(fieldName, "Invalid format for " + fieldName);
                }
            } else {
                errors.put("request", "Invalid JSON format");
            }
        } else {
            // Generic JSON parsing error
            errors.put("request", "Invalid JSON format");
        }

        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
}