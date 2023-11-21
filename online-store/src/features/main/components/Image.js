export const generateThumbnail = (file, thumbnail) => {
    const reader = new FileReader();

    reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
            const thumbnailSize = { width: 500, height: 300 };

            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            canvas.width = thumbnailSize.width;
            canvas.height = thumbnailSize.height;

            context.drawImage(img, 0, 0, thumbnailSize.width, thumbnailSize.height);

            thumbnail.value = canvas.toDataURL("image/jpeg");
        };
    };

    reader.readAsDataURL(file);
};
