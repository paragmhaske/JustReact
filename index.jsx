import {createRoot} from "react-dom/client";
let root = createRoot(document.getElementById("root"));
//root.render(<h1>Lets React</h1>);

function Header() {
return (
    <header>
    <img src="react-logo.png" width="40px" alt="React logo" />
</header>

)
}
function Page() {
    return (
        <main>
        <h1>Reason I am excited to learn React</h1>
        <ol>
            <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer if I know React</li>
        </ol>
    </main>
    
    )
    }
    function FooterCompoent() {
        return (
            <footer>
        <small>© 2025 Parag development. All rights reserved.</small>
    </footer>
        
        )
        }


function MainContent() {
return (<>
   <Header />
   <MainComponent />
   <FooterCompoent /> 
</>
    )
    }
    root.render(
        <Page />
    )