interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstname: "John",
    lastname: "Doe",
    age: 25,
    location: "New York"
};

const student2: Student = {
    firstname: "Jane",
    lastname: "Doe",
    age: 25,
    location: "Boston"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const locationCell = row.insertCell();

    nameCell.textContent = student.firstname + " " + student.lastname;
    locationCell.textContent = student.location;
});

document.body.appendChild(table);
