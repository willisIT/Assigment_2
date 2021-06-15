var retrievedData = [];
const paginationControls = document.querySelectorAll("li.page-item");
let userPerPage = 30;
let startOfList = 0;
let endOfList = userPerPage;
let previousItem = paginationControls[0];

$(document).ready(function(){
    const list_elements = $("#card_items");
    

    $.get("https://sheetlabs.com/MENC/laptops",
        function (data) {
            var count=0;
            retrievedData = data;
            // console.log(data);

            controls(paginationControls);

            appendData(retrievedData);
            $(".loader").css("display", "none");

            $("#button").click(function (e) { 
                e.preventDefault();
                var input_val = $("#input_text").val();
                const filteredData = filterItems(data,input_val);
                // console.log(filteredData)
                if(filteredData.length){
                    // console.log("there")
                    list_elements.empty();
                    appendData(filteredData);
                } else {
                    alert(`${input_val} Not Found`)
                    appendData(data);
                }
            });
        }
        
    );

    function appendData(data) {

        list_elements.empty();
        data.slice(startOfList, endOfList).forEach((element, index) => {
            list_elements.append(`
            <div class="col-md-3 col-12 mb-5">
                <div class="card _card">
                    <img class="card-img-top p-2" src="./asset/laptop.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title d-flex flex-wrap justify-content-between align-items-center">
                        ${element.modelname}
                            <span style="background: #007bff;" class="badge badge-pill">${element.ram}</span>
                        </h5>
                        <small>${element.manufacturer}</small>
                        <p class="fw-bold">$${element.priceeuros}<p>
                        <button class="btn btn-primary" onclick="showItem(${index})">Check Item</button>
                    </div>
                </div>
            </div>
            `);
        });
        
    }

    function controls(paginationControls) {
        paginationControls.forEach(function(item, index){
            item.addEventListener('click', function(){
                previousItem.classList.remove('active');
                rangeUsersPerPage(index, item);
                appendData(retrievedData);
                previousItem = item;
            });
        });  
      }

    function rangeUsersPerPage(index, item) {
        console.log("index: ", index);
        if(!index) {
          startOfList = 0;
          endOfList = userPerPage;
          item.classList.add('active');
        }else {
          item.classList.add('active');
          startOfList = userPerPage * index;
          endOfList = startOfList + userPerPage;
        }
      }

    function filterItems(items, searchVal) {
        var newArray = [];
        items.forEach(((item,index)=> {
            Object.values(item).includes(searchVal)?newArray.push(items[index]):"";
        }));
        return newArray;
        
    }

})



function showItem(param) {
    localStorage.setItem("data", JSON.stringify(retrievedData[param]));
    window.location.href = "display.html";
};