# ctu-courses-api

Api demo: https://api.tools.w5team.com

App demo: https://tools.w5team.com/timetable

Ngoài ra các bạn muốn tự triển khai server riêng thì clone repo này về và tự vọc nhá : ))

## Tìm kiếm học phần theo tên hoặc mã học phần:

### request

path: /courses/search/:q

### response

```json
[
  {
    "name": "Kỹ năng học đại học",
    "key": "CT100"
  },
  {
    "name": "Lập trình căn bản A",
    "key": "CT101"
  },
  {
    "name": "Toán cho khoa học máy tính",
    "key": "CT101H"
  },
  ...
]
```

## Tìm kiếm lớp học phần bằng mã học phần

### request

- path: /courses/key/:key
- query:
  - y: Năm học (Ví dụ: năm học 2020 - 2021 thì sẽ ghi là 20202021)
  - n: học kỳ (1, 2, 3)

### response

```json
[
  {
    "key": "CT100",
    "class": "CT10001",
    "week": "123456789012345******",
    "id": "01",
    "member": 40,
    "name": "Kỹ năng học đại học",
    "time": [
      {
        "start": 3,
        "count": 2,
        "day": 5,
        "room": "107/A3"
      }
    ]
  },
  {
    "key": "CT100",
    "class": "CT10002",
    "week": "123456789012345******",
    "id": "02",
    "member": 40,
    "name": "Kỹ năng học đại học",
    "time": [
      {
        "start": 4,
        "count": 2,
        "day": 6,
        "room": "302/C1"
      }
    ]
  },
  ...
]
```

## Yêu cầu thêm môn học

### request

path: /courses/request-add-course
body:

```json
{
  "key": "string" // Mã học phần
}
```

### response
- success: 200
- failed: 404
