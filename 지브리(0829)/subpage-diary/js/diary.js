document.addEventListener('DOMContentLoaded' , () => {

    let imageIndex = 0 ;
    const images = ["css/images/image1.jpg", "css/images/image2.jpg", "css/images/image3.jpg"];

    const updateBackground = () => {
        document.getElementById('textarea').style.backgroundImage = `url('${images[imageIndex]}')`;

    };

    document.getElementById('prevButton').addEventListener('click', () => {
        imageIndex = (imageIndex - 1 + images.length) % images.length;
        updateBackground();
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        imageIndex = (imageIndex + 1) % images.length;
        updateBackground();
    });

    // 초기 배경 이미지 설정
    updateBackground();

});///////////////////////end