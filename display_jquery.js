$(document).ready(function () {
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data.priceeuros)
    $("#laptop_title").html(data.modelname);
    $("#laptop_manu").html(data.manufacturer);
    $("#laptop_price").html(`$${data.priceeuros}`);


    $("#laptop_details").append(`
        <li class="list-group-item disabled"><span class="fw-bold">Category</span> <span style="margin-left:10px;">${data.category}</span</li>
        <li class="list-group-item disabled"><span class="fw-bold">Screen Size</span> <span style="margin-left:10px;">${data.screensize}</span</li>
        <li class="list-group-item disabled"><span class="fw-bold">Screen</span> <span style="margin-left:10px;">${data.screen}</span</li>
        <li class="list-group-item disabled"><span class="fw-bold">CPU</span> <span style="margin-left:10px;">${data.cpu}</span</li>
        <li class="list-group-item disabled"><span class="fw-bold">RAM</span> <span style="margin-left:10px;">${data.ram}</span</li>
        <li class="list-group-item disabled"><span class="fw-bold">Storage</span> <span style="margin-left:10px;">${data.storage}</span</li>
        <li class="list-group-item disabled"><span class="fw-bold">GPU</span> <span style="margin-left:10px;">${data.gpu}</span</li>
        <li class="list-group-item disabled"><span class="fw-bold">Operating System</span> <span style="margin-left:10px;">${data.operatingsystem}</span</li>
        <li class="list-group-item disabled"><span class="fw-bold">Operating System Version</span> <span style="margin-left:10px;">${data.operatingsystemversion}</span</li>
        <li class="list-group-item disabled"><span class="fw-bold">Weight</span> <span style="margin-left:10px;">${data.weight}</span</li>
        
    `);
});
