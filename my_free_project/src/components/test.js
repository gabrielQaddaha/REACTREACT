function updateInnerHTML() {
    const element = document.getElementById('myElement');
    element.innerHTML = 'Nouveau contenu';
}

export default function Test() {
    return (
        <div>
            <h1>Test</h1>
            <button onClick={updateInnerHTML}>Cliquez ici</button>
            <p id="myElement">Contenu initial</p>
        </div>
    );
}

