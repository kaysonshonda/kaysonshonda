<?php
declare(strict_types=1);

/**
 * Common validation and sanitization helpers for the Spark project.
 */

/**
 * Validate form data against rules
 *
 * @param array $data Form data
 * @param array $rules Validation rules
 * @return array Array of error messages
 */
function validateFormData(array $data, array $rules): array
{
    $errors = [];

    foreach ($rules as $field => $rule) {
        $value = $data[$field] ?? '';

        if ($rule['required'] && (empty($value) || !isset($data[$field]))) {
            $errors[] = formatFieldName($field) . ' is required';
            continue;
        }

        if (!$rule['required'] && empty($value)) {
            continue;
        }

        $typeError = validateFieldType($field, $value, $rule['type']);
        if ($typeError) {
            $errors[] = $typeError;
            continue;
        }

        if (isset($rule['minLength']) && strlen($value) < $rule['minLength']) {
            $errors[] = formatFieldName($field) . ' must be at least ' . $rule['minLength'] . ' characters';
        }

        if (isset($rule['maxLength']) && strlen($value) > $rule['maxLength']) {
            $errors[] = formatFieldName($field) . ' must not exceed ' . $rule['maxLength'] . ' characters';
        }

        if (isset($rule['pattern']) && !preg_match($rule['pattern'], $value)) {
            if ($rule['type'] === 'phone') {
                $errors[] = 'Phone number must be in the expected format';
            } else {
                $errors[] = formatFieldName($field) . ' format is invalid';
            }
        }
    }

    return $errors;
}

/**
 * Validate field type
 *
 * @param string $field Field name
 * @param string $value Field value
 * @param string $type Expected type (string, email, phone)
 * @return string|null Error message or null
 */
function validateFieldType(string $field, string $value, string $type): ?string
{
    switch ($type) {
        case 'email':
            if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
                return 'Please enter a valid email address';
            }
            break;

        case 'phone':
            if (!preg_match('/^[\d\s\-\+()]+$/', $value)) {
                return 'Phone number contains invalid characters';
            }
            break;

        case 'string':
            if (!is_string($value)) {
                return formatFieldName($field) . ' must be a string';
            }
            break;
    }

    return null;
}

/**
 * Sanitize input data
 *
 * @param mixed $input Input value
 * @param string $type Input type (string, email, phone)
 * @return string Sanitized value
 */
function sanitizeInput($input, string $type): string
{
    $input = trim((string)$input);

    switch ($type) {
        case 'email':
            return filter_var($input, FILTER_SANITIZE_EMAIL);

        case 'phone':
            return preg_replace('/[^0-9\-\+()\s]/', '', $input);

        case 'string':
        default:
            return htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    }
}

/**
 * Format field name for error messages
 * Converts 'fullName' to 'Full Name'
 *
 * @param string $field Field name in camelCase
 * @return string Formatted field name
 */
function formatFieldName(string $field): string
{
    $formatted = preg_replace('/([a-z])([A-Z])/', '$1 $2', $field);
    return ucfirst($formatted);
}
