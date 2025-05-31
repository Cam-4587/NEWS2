document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var data = document.getElementById("data");
    console.log(data.value);
});