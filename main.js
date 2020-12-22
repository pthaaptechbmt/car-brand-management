/**
 * Bài tập 2:
 * Cho mảng các loại xe ô tô như sau: cars = ["Honda", "Hyundai", "Toyota", "Isuzu", "KIA", "Mercedes Benz", "BMW"];
 * Xây dựng một giao diện cho phép người dùng như sau:
 * - Một input để người dùng nhập liệu
 * - Ba button có tiêu đề Thêm/Xóa/Sửa tương ứng với việc thực hiện các chức năng tuần tự bên dưới:
 * + Nhập thêm một hãng xe bất kỳ vào danh sách xe đã cho ở trên
 * + Xóa một hãng xe bất kỳ dựa trên danh sách xe đã cho ở trên
 * + Thay đổi tên một hãng xe bất kỳ dựa trên danh sách xe đã cho ở trên
 * - Một ul hiển thị danh sách các xe lấy từ mảng cars đã cho ở trên và nó được cập nhật khi người dùng thực hiện các thao tác Thêm/Xóa/Sửa
 */
// Viết code giải quyết bài tập dưới đây

var cars = [
  "Cadillac",
  "Chevrolet",
  "Renault",
  "Honda",
  "Hyundai",
  "Toyota",
  "Isuzu",
  "KIA",
  "Mercedes Benz",
  "BMW",
  "Nissan",
];

main();

function main() {
  renderCars();
  var buttonAddCar = document.getElementById("add-car");
  buttonAddCar.addEventListener("click", addcar);

  var buttonDeleteCar = document.getElementById("delete-car");
  buttonDeleteCar.addEventListener("click", deletecar);

  var buttonEditCar = document.getElementById("edit-car");
  buttonEditCar.addEventListener("click", editcar);
}
// Khai báo các function để xử lý:
function renderCars() {
  var carListHTML = document.getElementById("car-list");
  var carName = document.getElementById("car-name");
  var string = cars.map(function (car) {
    return `<li class="car-item">${car}</li>`; //template string ES6
  });
  carListHTML.innerHTML = string.join("");
  var carItems = document.querySelectorAll(".car-item");
  carItems.forEach(function (carItem) {
    carItem.addEventListener("click", function (event) {
      carName.value = event.target.textContent;
    });

    var backgroundColors = [
      "#ff0084",
      "#ff66ff",
      "#43cea2",
      "#D38312",
      "#73C8A9",
      "#9D50BB",
      "#780206",
      "#FF4E50",
      "#ADD100",
      "#0F2027",
      "#00c6ff",
      "#81D8D0",
      "#5CB3FF",
      "#95B9C7",
      "#C11B17",
      "#3B9C9C",
      "#FF7F50",
      "#FFD801",
      "#79BAEC",
      "#F660AB",
      "#3D3C3A",
      "#3EA055",
    ];
    var rand = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    carItem.style.backgroundColor = rand;
  });
}

function addcar() {
  var carName = document.getElementById("car-name").value;
  if (carName.trim() === "") {
    alert("Vui lòng nhập tên hãng xe");
  } else if (cars.includes(carName)) {
    //tra ve true neu ton tai
    alert("Tên hãng xe đã tồn tại");
  } else {
    cars.push(carName);
    renderCars();
  }
}
function deletecar() {
  var carName = document.getElementById("car-name").value;
  if (carName.trim() === "") {
    alert("Vui lòng nhập tên hãng xe");
  } else if (cars.includes(carName)) {
    //tra ve true neu ton tai
    cars.splice(cars.indexOf(carName), 1);
    document.getElementById("car-name").value = "";
    renderCars();
  } else {
    alert("Tên hãng xe không tồn tại");
  }
}

function editcar() {
  var carOldName = document.getElementById("car-name").value;
  if (carOldName === "") {
    alert("Vui lòng chọn hoặc nhập tên hãng xe cần thay đổi");
  } else if (!cars.includes(carOldName)) {
    alert("Tên hãng xe cần thay đổi không tồn tại");
  } else {
    //Nếu người dùng nhập trống hoặc nhập chỉ có khoảng trắng bắt buộc người dùng phải nhập lại
    do {
      var carNewName = prompt("Nhập tên hãng xe:");
      if (carNewName === null) return; //Trường hợp người dùng bấm cancel thì thoát chương trình
    } while (carNewName.trim() === "");
    cars.splice(cars.indexOf(carOldName), 1, carNewName.trim());
    document.getElementById("car-name").value = "";
    renderCars();
  }
}
