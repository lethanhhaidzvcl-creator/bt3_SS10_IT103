
let borrowRecords = [
    {
        recordId: "PM01",
        studentId: "SV101",
        bookTitle: "JavaScript Cơ Bản",
        borrowDays: 10,
        isReturned: false
    },
    {
        recordId: "PM02",
        studentId: "SV102",
        bookTitle: "Clean Code",
        borrowDays: 20,
        isReturned: false
    },
    {
        recordId: "PM03",
        studentId: "SV103",
        bookTitle: "Lập Trình C",
        borrowDays: 15,
        isReturned: false
    }
];

console.log("=== 1. THÊM PHIẾU MƯỢN ===");

borrowRecords.push({
    recordId: "PM04",
    studentId: "SV104",
    bookTitle: "Clean Code",
    borrowDays: 18,
    isReturned: false
});

console.table(borrowRecords);

console.log("=== 2. TÍNH PHÍ PHẠT QUÁ HẠN ===");

let totalFine = 0;

for (let i = 0; i < borrowRecords.length; i++) {
    let fine = 0;

    if (borrowRecords[i].borrowDays > 14 &&
        borrowRecords[i].isReturned === false) {
        fine = (borrowRecords[i].borrowDays - 14) * 5000;
    }

    totalFine += fine;

    console.log(
        borrowRecords[i].recordId + " - " +
        borrowRecords[i].bookTitle + " - Phạt: " +
        fine.toLocaleString("vi-VN") + " VNĐ"
    );
}

console.log("Tổng tiền phạt: " +
    totalFine.toLocaleString("vi-VN") + " VNĐ");

console.log("=== 3. CẬP NHẬT TRẢ SÁCH ===");

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === "PM01") {
        borrowRecords[i].isReturned = true;
        console.log("Đã cập nhật PM01: Đã trả sách.");
    }
}

console.table(borrowRecords);

console.log("=== 4. XÓA PHIẾU MƯỢN ===");

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === "PM03") {
        borrowRecords.splice(i, 1);
        console.log("Đã xóa phiếu PM03.");
        break;
    }
}

console.table(borrowRecords);

console.log("=== 5. BÁO CÁO THƯ VIỆN ===");

let totalRecords = borrowRecords.length;
let borrowingCount = 0;
let returnedCount = 0;

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].isReturned === false) {
        borrowingCount++;
    } else {
        returnedCount++;
    }
}

console.log("Tổng số phiếu còn trong danh sách: " + totalRecords);
console.log("Số phiếu đang mượn: " + borrowingCount);
console.log("Số phiếu đã trả: " + returnedCount);
console.log("Tổng tiền phạt tính trước khi cập nhật: " +
    totalFine.toLocaleString("vi-VN") + " VNĐ");
console.table(borrowRecords);