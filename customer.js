function showData(){
    var users;
    if(localStorage.getItem("users")==null){
        users = [];
    }
    else{
        users =JSON.parse(localStorage.getItem("users"))
    }

    var html = "";

    users.forEach(function(element,index){
        html +="<tr>";
        html += "<td>" + element.username + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.password + "</td>";
        html += '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button></td>';
        html +="<tr>";

    });

    document.querySelector(".fl-table tbody").innerHTML = html;
}


document.onload = showData();

function deleteData(index){
    var users;
    if(localStorage.getItem("users")==null){
        users = [];
    }
    else{
        users =JSON.parse(localStorage.getItem("users"))
    }
    for(i=0;i<=users.length;i++){
        var db_username = users[i].username;
        var db_password = users[i].password;
        if(db_username != 'kbprajapati' && db_password != 'Krunal@1904'){
            users.splice(index,1);
            localStorage.setItem("users",JSON.stringify(users));
            break;
        }
        else{
            alert("Admin cannot be delete")
        }
    }
    showData();
}