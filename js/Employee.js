function Employee(acc, name, email, pass, workDay, salary, position, workTime) {

    this.acc = acc;
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.workDay = workDay;
    this.salary = salary;
    this.position = position;
    this.workTime = workTime;

    this.totalSalary = 0;
    this.calSalary = function () {
        if (this.position == "Sếp") {
            this.totalSalary = this.salary * 3;
        } else if (this.position == "Trưởng phòng") {
            this.totalSalary = this.salary * 2;
        } else if (this.position == "Nhân viên") {
            this.totalSalary = this.salary;
        }
    }

    this.type = "";
    this.typeEmp = function () {
        if (this.workTime >= 192) {
            this.type = "Xuất sắc";
        } else if (this.workTime >= 176) {
            this.type = "Giỏi";
        } else if (this.workTime >= 160) {
            this.type = "Khá";
        } else {
            this.type = "Trung bình";
        }
    }
}

