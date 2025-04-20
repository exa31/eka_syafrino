export default function Footer() {

    const thisYear = new Date().getFullYear();

    return (
        <footer className="flex bg-[#0f172a] py-20 items-center justify-center">
            <h1>© Copyright { thisYear}. All Rights Reserved.</h1>
        </footer>
    )
};