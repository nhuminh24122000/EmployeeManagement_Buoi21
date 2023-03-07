function ListEmp() {
    this.arrEmp = [];

    this.addEmp = function(emp) {
        this.arrEmp.push(emp);
    }

    this.findIndexEmp = function(id) {
        var indexFind = -1;
        
        indexFind = this.arrEmp.findIndex(function(emp) {
            return emp.acc == id;
        })
        
        return indexFind;
    }

    this.deleteEmp = function(id) {
        var index = this.findIndexEmp(id);
        
        if (index != -1) {
            this.arrEmp.splice(index, 1);
        }

    }

    this.updateEmp = function(emp) {
        var index = this.findIndexEmp(emp.acc);

        if (index != -1) {
            this.arrEmp[index] = emp;
        }
    }
}

ListEmp.prototype.searchType = function(keyword) {

    var arrResult = [];
    var keywordLowerCase = keyword.toLowerCase();

    keywordLowerCase = keywordLowerCase.replace(/\s/g, "");

    this.arrEmp.map(function (emp) {
        var typeLowerCase = emp.type.toLowerCase().replace(/\s/g, "");

        if (typeLowerCase.indexOf(keywordLowerCase) > -1) {
            arrResult.push(emp);
        }

    });

    return arrResult;
}