// ============================================
// Test Fixtures
// ============================================

/**
 * Örnek kullanıcı verisi
 */
export const mockUsers = [
    {
        id: 'usr_001',
        name: 'Test User',
        email: 'test@example.com',
        role: 'admin',
        isActive: true,
        createdAt: '2024-01-01T00:00:00Z',
    },
    {
        id: 'usr_002',
        name: 'Demo User',
        email: 'demo@example.com',
        role: 'user',
        isActive: true,
        createdAt: '2024-01-15T00:00:00Z',
    },
];

/**
 * Örnek API response
 */
export const mockApiResponse = {
    success: {
        status: 200,
        data: mockUsers,
        pagination: {
            page: 1,
            limit: 20,
            total: 2,
            totalPages: 1,
        },
    },
    error: {
        status: 400,
        error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid request',
            details: [],
        },
    },
    notFound: {
        status: 404,
        error: {
            code: 'NOT_FOUND',
            message: 'Resource not found',
        },
    },
};
