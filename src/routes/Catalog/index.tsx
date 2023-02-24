import Header from "../../components/Header";
import Invitation from "../../components/Invitation";

export default function Catalog() {
    return (
        <>
            <Header />
            <main className="dsct-catalog-main"> 
                <section id="dsct-catalog-section" className='dsct-container'>
                    <div className="dsct-invitation-container">
                        <Invitation />
                    </div>
                    <div className="dsct-catalog-cards-container">

                    </div>
                </section>
            </main>
        </>
    );
}