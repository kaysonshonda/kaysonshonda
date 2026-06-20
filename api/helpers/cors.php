<?php
declare(strict_types=1);

/**
 * CORS and request method helpers
 *
 * Centralizes header management, preflight handling and method enforcement.
 */

/**
 * Set standard CORS headers and JSON content type.
 *
 * @param string $origin Allowed origin (use '*' or specific origin)
 * @param array $allowedMethods Allowed HTTP methods
 * @param array $allowedHeaders Allowed request headers
 * @param int $maxAge Preflight cache max age in seconds
 */
function setCorsHeaders(string $origin = '*', array $allowedMethods = ['POST', 'OPTIONS'], array $allowedHeaders = ['Content-Type'], int $maxAge = 86400): void
{
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: ' . implode(', ', $allowedMethods));
    header('Access-Control-Allow-Headers: ' . implode(', ', $allowedHeaders));
    header("Access-Control-Max-Age: $maxAge");
    header('Content-Type: application/json; charset=UTF-8');
}

/**
 * Terminate request early for preflight OPTIONS requests.
 */
function handlePreflight(): void
{
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

/**
 * Enforce a single HTTP method for the endpoint.
 * Returns a 405 JSON response on mismatch.
 *
 * @param string $method Required HTTP method (e.g. 'POST')
 */
function requireMethod(string $method): void
{
    if ($_SERVER['REQUEST_METHOD'] !== strtoupper($method)) {
        http_response_code(405);
        echo json_encode([
            'status' => 'error',
            'message' => 'Method Not Allowed'
        ]);
        exit;
    }
}
