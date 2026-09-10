class Student {
        constructor(name, age, grade, course) {
            this.name = name;
            this.age = age;
            this.course = course;
            this.grade = grade;
        }
        printDetails() {
            return `Opiskelijan nimi: ${this.name}<br> Ikä: ${this.age}<br> Kurssi: ${this.course}<br> Arvosana: ${this.grade}`;
        }

        printGrade() {

            const grade = parseInt(this.grade);
            if (grade === 1) {
                return "Hylätty";
            }
            else if (grade === 2) {
                return "Hyväksytty";
            }
            else if (grade === 3) {
                return "Hyvä";
            }
            else if (grade === 4) {
                return "Erittäin hyvä";
            }
            else if (grade === 5) {
                return "Erinomainen";
            }
            else {
                return "Virheellinen arvosana";
            }
        }
    }

    function addStudent() {
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const course = document.getElementById("course").value;
        const grade = document.getElementById("grade").value;

        const student = new Student(name, age, grade, course);
        const studentList = document.getElementById("studentList");
        studentList.innerHTML += `<tr><td>${student.name}</td><td>${student.age}</td><td>${student.course}</td><td>${student.printGrade()}</td></tr>`;
        }