import './App.css'

function App() {

    const choices = [ 'rlf', 'rrf', 'rlh', 'rrh', 'ylf', 'yrf', 'ylh', 'yrh', 'glf', 'grf', 'glh', 'grh', 'blf', 'brf', 'blh', 'brh' ]
    
    const indexRandom = () => {
        return Math.floor(Math.random()*16)
    }

    const choose = (e) => {
            e.preventDefault()
            indexRandom()
            // console.log(indexRandom())
            const i = indexRandom()
            const choice = choices[i]
            e.target.classList.add(choice)
            setTimeout(() => {
                e.target.classList.remove(choice)
            }, 2500)
    }

    return (
            <div onClick={choose} className="spinner">
            </div>
    )
}

export default App
