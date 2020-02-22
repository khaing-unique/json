let student=document.querySelector("#student");
let getData=(callback)=>{
let request=new XMLHttpRequest();
request.open("GET",'student.json');
request.send();
request.addEventListener("readystatechange",()=>{
    if (request.status===200 && request.readyState===4){
        const datas=JSON.parse(request.responseText);
        callback(undefined,datas);
        datas.forEach(data => {
            student.innerHTML+=`
            
            <div class="col-xs-3">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h4 class="card-title">${data.name}</h4>
            <h5 class="card-text">${data.rollno}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
        `;
        });
    }else if(request.readyState===4){
        callback("No data!",undefined);
    }
});
};

getData((err,data)=>{
    if(data){
        console.log(data);
    }else{
        console.log(err);
    }
});