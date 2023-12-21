document.querySelectorAll('.blinds li:not(:first-child)').forEach(li => {
    li.addEventListener('mouseenter', () => {
        li.classList.add('expand');
        document.querySelectorAll('.blinds li:not(:first-child):not(.expand)').forEach(otherLi => {
            otherLi.classList.add('shrink');
        });
    });
    li.addEventListener('mouseleave', () => {
        li.classList.remove('expand');
        document.querySelectorAll('.blinds li').forEach(otherLi => {
            otherLi.classList.remove('shrink');
        });
    });
    

document.querySelectorAll('.video-list-item').forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        var videoContainer = document.getElementById(`video-container-${index + 1}`);
        videoContainer.style.display = 'block'; // 显示视频容器
    });

    item.addEventListener('mouseleave', () => {
        var videoContainer = document.getElementById(`video-container-${index + 1}`);
        videoContainer.style.display = 'none'; // 隐藏视频容器
    });
});


// 为每个轮播图集设置独立的轮播功能
document.querySelectorAll('.carousel').forEach(carousel => {
    // 获取当前轮播图集中的所有图片
    const images = carousel.querySelectorAll('.carousel-images img');
    // 设置初始图片索引为0（第一张图片）
    let currentImageIndex = 0;
    // 默认显示第一张图片
    images[currentImageIndex].classList.add('active');

    // 获取当前轮播图集中的“上一个”和“下一个”按钮
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');

    // 为“上一个”按钮添加点击事件
    prevButton.addEventListener('click', () => {
        // 移除当前图片的激活状态
        images[currentImageIndex].classList.remove('active');
        // 计算上一张图片的索引，并显示
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        images[currentImageIndex].classList.add('active');
    });

    // 为“下一个”按钮添加点击事件
    nextButton.addEventListener('click', () => {
        // 移除当前图片的激活状态
        images[currentImageIndex].classList.remove('active');
        // 计算下一张图片的索引，并显示
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    });
});




    
});
