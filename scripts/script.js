// web swiper
const webS = new Swiper('.web .swiper',{
    autoplay:{delete:1000},
    loop:true,
    navigation:{//2*
        nextEl:'.web .swiper-button-next',
        prevEl:'.web .swiper-button-prev',
    }
})
//이전, 다음 기본 값 position:absolute 를 가짐
//swiper 클래스 대상의 안에 작성했을 땐 swiper가 absolute를 잡는 relative 기본내장으로 별도 설정은 안해도 되지만 밖에 작성했을 땐 밖 위치 기준으로 그 부모에게 relative 설정을 따로 해줘야 한다.!! 


//sns swiper
const snsS = new Swiper('.sns .swiper',{
    slidesPerView:2,//한번에 보일 슬라이드 수 (모바일)
    spaceBetween:20,//슬라이드 사이 여백
    autoplay:{delay:1,desableOnInteration:true,},//delay 전환속도, desable넣으면 자연스럽게 전환
    loop:true,
    speed:8000,
    freemode:true,//사용자가 마우스 이동하는 방향으로 흘러가게하는것
    //반응형 슬라이드 수 
    breakpoint:{
        800:{slidesPerView:3,},//800이상일때 3개
        1200:{slidesPerView:4,},//1200이상일때 4개
    }
})

//detail swiper
const detailS = new Swiper('.detail .swiper',{
    slidesPerView:2,//모바일수
    spaceBetween:20,
    autoplay:{delete:2000},
    loop:true,
    breakpoint:{
        800:{slidesPerView:3,},//800이상일때 3개
        1200:{slidesPerView:4,},//1200이상일때 4개
    }
})

//detail popup
//1.팝업 숨기기(big_bg)
//2.swiper img 클릭 시 
//3.팝업 보이기
const big_bg = document.querySelector('.big_bg')
const detail_img = document.querySelectorAll('.detail .swiper-slide img')
const big_img = document.querySelector('.big_bg img')
console.log(big_bg, detail_img, big_img)
big_bg.style.display = 'none' //팝업 초기 숨기기(1)

for(let detail of detail_img){//6개 이미지 반복문 접근(2)
    detail.addEventListener('click',(e)=>{//a태그써서 위로 올라가는데 그걸 막아준다
        //클릭한 대상 관련에 a가 있다면 스크롤 위로 올라가는 기능 막기
        e.preventDefault()
        //큰이미지 부모 보이기
        big_bg.style.display = 'block'
        //판업 실행 시 body 스크롤 막기
        document.body.style.overflow = 'hidden'; //팝업이 열렸을때 뒤 스크롤 숨겨준다.\
        //console.log(detail.src)
        //클릭한 이미지의 경로(src)를 큰 이미지 팝업의 src로 대입하기
        big_img.src = detail.src //(3) 각이미지 클릭시 맞는 이미지 나올수있게한다. 
        //이전 팝업에서 내린 스크롤을 기억하지 않도록 항상 스크롤 위로 올리기
        big_bg.children[0].scrollTo(0,0)//스크롤 항상 위에서부터 다시보기 설정
    })
}
//4.팝업 출력시 팝업닫기
big_bg.addEventListener('click',()=>{
    big_bg.style.display = 'none'
    document.body.style.overflow = '';//(4)위에숨긴스크롤을 팝업닫으면 생성
})