import html2canvas from 'html2canvas';

export const handleDownloadImage = async (printableRef) => {
    const element = printableRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
        link.style.display = "none";
        link.href = data;
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(data);
    }
};
