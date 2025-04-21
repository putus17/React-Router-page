import { useSearchParams } from 'react-router-dom'

export default function Search() { 
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('q') || ''
    
    const handleSearch = (e) => {
        e.preventDefault()
        const forData = new FormData(e.target)
        setSearchParams({ q: forData.get('query') })        
    }

    return (

        <div>
            <h1>Search</h1>
            <section className="card">
                <p>This component demonstrates working with query parameters.</p>
                <form onSubmit={handleSearch}>
                    <input name='query' defaultValue={query} placeholder='Search term...'/>
                    <button type='submit'>Search</button>
                </form>
            {query && (
                <div style={{ marginTop: '1rem' }}>
                    <h2>Search Results for: {query}</h2>
                    <p>Displaying search results for the query "{query}"...</p>
                </div>
            )}
            </section>
        </div>          
    )
}

