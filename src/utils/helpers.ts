export const navigateTo = (e:React.MouseEvent<HTMLAnchorElement,MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const sectionId = href.replace(/.*\#/, "");
    const element = document.getElementById(sectionId);
    element && element.scrollIntoView({behavior:"smooth"});
}