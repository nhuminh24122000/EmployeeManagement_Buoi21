function Validation() {

    this.checkEmpty = function (valueInput, spanID, message) {
        if (valueInput == "") {
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false
        }

        document.getElementById(spanID).style.display = "none";
        document.getElementById(spanID).innerHTML = "";
        return true
    }

    this.accExist = function (valueInput, spanID, message, arrEmp) {
        var isExist = false;

        isExist = arrEmp.some(function (emp) {
            return valueInput === emp.acc
        });

        if (isExist) {
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false

        } else {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

    }

    this.checkAcc = function (valueInput, spanID, message) {
        var pattern = /^[0-9]{4,6}$/;

        if (valueInput.match(pattern)) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false
    }


    this.checkName = function (valueInput, spanID, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

        if (valueInput.match(pattern)) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false
    }

    this.checkEmail = function (valueInput, spanID, message) {
        var patternString = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (valueInput.match(patternString)) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false

    }


    this.checkPass = function (valueInput, spanID, message) {
        var pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

        if (valueInput.match(pattern)) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false

    }

    this.checkDay = function (valueInput, spanID, message) {
        var pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/((19|20)\d{2})$/;

        if (valueInput.match(pattern)) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false

    }

    
    this.checkSalary = function (valueInput, spanID, message) {
        var pattern = /^\d{7,8}$/;

        if (valueInput.match(pattern) && valueInput >= 1000000 && valueInput <= 20000000) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false

    }


    this.checkSelect = function (selectID, spanID, message) {
        var indexOption = document.getElementById(selectID).selectedIndex;

        if (indexOption !== 0) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false

    }


    this.checkTime = function (valueInput, spanID, message) {
        var pattern = /^\d{2,3}$/;

        if (valueInput.match(pattern) && valueInput >= 80 && valueInput <= 200) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false

    }

    // Phương thức kiểm tra định dạng ngày làm
    // kiemTraNgayLam() {
    //     const ngayLamRegex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    //     return ngayLamRegex.test(this.ngayLam);
    // }
}