# 📡 API Documentation

> Proje API endpoint referansı.

---

## Base URL

```
Development: http://localhost:3000/api
Staging:     https://staging.example.com/api
Production:  https://api.example.com
```

## Authentication

```
Authorization: Bearer <JWT_TOKEN>
```

---

## Endpoints

### Health Check

```http
GET /api/health
```

**Response: 200 OK**
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00Z",
  "version": "0.1.0"
}
```

---

### [Resource Name]

#### List All
```http
GET /api/[resource]
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Sayfa numarası (default: 1) |
| `limit` | integer | No | Sayfa başına kayıt (default: 20, max: 100) |
| `sort` | string | No | Sıralama alanı |
| `order` | string | No | Sıralama yönü (asc/desc) |

#### Get by ID
```http
GET /api/[resource]/:id
```

#### Create
```http
POST /api/[resource]
Content-Type: application/json
```

#### Update
```http
PUT /api/[resource]/:id
Content-Type: application/json
```

#### Delete
```http
DELETE /api/[resource]/:id
```

---

## Error Responses

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": []
  }
}
```

### Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `VALIDATION_ERROR` | 400 | Geçersiz istek verisi |
| `UNAUTHORIZED` | 401 | Kimlik doğrulama gerekli |
| `FORBIDDEN` | 403 | Yetkilendirme hatası |
| `NOT_FOUND` | 404 | Kaynak bulunamadı |
| `CONFLICT` | 409 | Çakışma (duplicate) |
| `INTERNAL_ERROR` | 500 | Sunucu hatası |

---

## Rate Limiting

| Plan | Limit | Window |
|------|-------|--------|
| Free | 100 req | 15 min |
| Pro | 1000 req | 15 min |

Headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1705312200
```

---

*Bu doküman yeni endpoint'ler eklendikçe güncellenmelidir.*
