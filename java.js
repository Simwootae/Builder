// 최상단 네비 윈도우가 내려가면 논되게 하기

window.onload = 
function()
{
    var topNav = document.querySelector("nav");
    console.log(topNav);
};

window.onscroll = function() {
    var topNav = document.querySelector("nav");
    if (window.scrollY > 0) {
        topNav.style.display = "none";
    } else {
        topNav.style.display = "block";
        topNav.style.display = "flex";
    }
};



// 컨트롤러와 슬라이더 셀렉트하기
var nextBtn = document.querySelector(".Control #btn_next");
var preBtn = document.querySelector(".Control #btn_pre");
var Topsliders = document.querySelectorAll(".TopsliderBox .slider");

// 셀렉 확인
console.log(nextBtn);
console.log(preBtn);
console.log(Topsliders);

// 슬라이더 나열
for(var i=0;i<Topsliders.length ;i++)
{
    Topsliders[i].style.left = `${100}%`;
}
Topsliders[0].style.left = `${0}%`;

// 버튼에 이벤트 달기
nextBtn.addEventListener("click", nextSlide);
preBtn.addEventListener("click", preSlide);

var topCount = 0;
function nextSlide()
{
    topCount = topCount + 1;
    TopslidersChange(topCount);
}
function preSlide()
{
    topCount = topCount - 1;
    TopslidersChange(topCount);
}

function TopslidersChange()
{
    console.log("슬라이더 변경");
    console.log(topCount);

    if(topCount<0)
    {
        topCount = Topsliders.length-1;
        console.log(topCount);
    }
    if(topCount>Topsliders.length-1)
    {
        topCount = 0;
        console.log(topCount);
    }

    for(var i=0;i<Topsliders.length ;i++)
    {
        Topsliders[i].style.left = `${100}%`;
    }
    Topsliders[topCount].style.left = `${0}%`;
}



// 프로젝트 섹션
// 아이콘 전부 논처리v 한다음에 사진을 호버하면 디스플레이 처리하기
var projectIcon = document.querySelectorAll(".cardDiv .cardBox .radiusBorder");
console.log(projectIcon);

var projectImg = document.querySelectorAll(".cardDiv .cardBox .imgBox");
console.log(projectImg);

//for문으로 아이콘 전부 논처리
projectIcon.forEach(
    function(index)
    {
        index.style.display = "none";
    }
);

projectImg.forEach(
    function(index)
    {
        index.addEventListener("mouseover", projectIconDisplay)
    }
);

projectImg.forEach(
    function(index)
    {
        index.addEventListener("mouseout", projectIconNone)
    }
);

// 호버시 함수
function projectIconDisplay(projectImg)
{
    console.log("이미지 호버");
    var elememt  = projectImg.currentTarget.firstElementChild.nextElementSibling;
    console.log(elememt);

    elememt.style.display = "block";
    elememt.style.display = "flex"
}

// 논 호버시 함수
function projectIconNone(projectIconNone)
{
    console.log("이미지 논호버");
    var elememt  = projectIconNone.currentTarget.firstElementChild.nextElementSibling;
    console.log(elememt);

    elememt.style.display = "none";

}




// 프로젝트 섹션 탭 동작 시키기

// 카드 셀렉
var projectBox = document.querySelectorAll(".Project .cardDiv .cardBox");
// 카드1
var projectBoxPAINTINGLk = document.querySelectorAll(".Project .cardDiv #PAINTINGLk");
// 카드2
var projectBoxRECONSTRUCTIONL = document.querySelectorAll(".Project .cardDiv #RECONSTRUCTIONL");
// 카드3
var projectBoxREPAIRSL = document.querySelectorAll(".Project .cardDiv #REPAIRSL");
console.log(projectBox);
console.log(projectBoxPAINTINGLk);
console.log(projectBoxRECONSTRUCTIONL);
console.log(projectBoxREPAIRSL);

// 텝 셀렉
var buttonAll = document.querySelector(".Project ul #ALL");
var buttonPAINTINGLK = document.querySelector(".Project ul #PAINTINGLk");
var buttonRECONSTRUCTIONL = document.querySelector(".Project ul #RECONSTRUCTIONL");
var buttonREPAIRSL = document.querySelector(".Project ul #REPAIRSL");
console.log(buttonAll);
console.log(buttonPAINTINGLK);
console.log(buttonRECONSTRUCTIONL);
console.log(buttonREPAIRSL);
// 카드 배치하기
for(var i = 0; i < projectBox.length; i++)
{
    projectBox[i].style.left = `${i*34}%`;
}

// 라벨에 이벤트 달기
buttonAll.addEventListener("click", ALLchange);
buttonPAINTINGLK.addEventListener("click", PAINTINGLKchange);
buttonRECONSTRUCTIONL.addEventListener("click", RECONSTRUCTIONLchange);
buttonREPAIRSL.addEventListener("click", REPAIRSLchange);


function ALLchange()
{
    console.log("라벨 클릭됨")
    
    for(var i = 0; i < projectBox.length; i++)
    {
        projectBox[i].style.display = "block";

    }
    // 옮겨가는 거 자체는 됬으니 숫자 맞추기
    for(var i = 0; i < projectBox.length; i++)
    {
        projectBox[i].style.left = `${(i*34)}%`;
    }
}

function PAINTINGLKchange()
{
    console.log("라벨 클릭됨");

    projectBoxPAINTINGLk[0].style.left = `${-450}px`;
    projectBoxPAINTINGLk[1].style.left = `${0}%`;

}

function RECONSTRUCTIONLchange()
{
    projectBoxRECONSTRUCTIONL[0].style.left = `${0}%`;
    projectBoxRECONSTRUCTIONL[1].style.left = `${34}%`

}

function REPAIRSLchange()
{
    projectBoxREPAIRSL[1].style.left = `${34}%`;
}




// 슬라이더 요소와 버튼을 선택
var MobitorslideAll = document.querySelectorAll(".Testimonial .sliderBox .slider");
var MonitorpreBtn = document.querySelector(".Testimonial .controlBox #pre");
var MonitornextBtn = document.querySelector(".Testimonial .controlBox #next");
console.log(MobitorslideAll);
console.log(MonitorpreBtn);
console.log(MonitornextBtn);

for(var i=0; i<MobitorslideAll.length; i++)
{
    MobitorslideAll[i].style.left = `${100}%`;
}

MobitorslideAll[0].style.left = `${0}%`;
var MonitorCount = 0;
// 현재 화면에 보이는 슬라이드의 인덱스
// 이전 버튼 클릭 이벤트
MonitorpreBtn.addEventListener("click", function()
{
    MonitorCount = MonitorCount - 1;
    MonitorSlidechange();
});

// 다음 버튼 클릭 이벤트
MonitornextBtn.addEventListener("click", function()
{
    MonitorCount = MonitorCount + 1;
    MonitorSlidechange();
});



// 슬라이드 전환
function MonitorSlidechange()
{
    console.log("슬라이드 변경");
    console.log(MonitorCount);
    if(MonitorCount < 0)
    {
        MonitorCount = MobitorslideAll.length-1;
        console.log(MonitorCount);
    }
    if(MonitorCount > MobitorslideAll.length-1)
    {
        MonitorCount = 0;
    }


    for(var i=0; i<MobitorslideAll.length; i++)
    {
        MobitorslideAll[i].style.left = `${100}%`;
    }
    MobitorslideAll[MonitorCount].style.left = `${0}%`;


}

