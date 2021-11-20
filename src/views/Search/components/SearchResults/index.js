export default function SearchResults({ results, isSearching }) {
return (
    <div style={{
        width: "100%",
        padding: "0rem 2rem 0rem 2rem"
    }}>
        {!results?.length && isSearching && <p>No existen resultados</p>}
        {results?.map((value) => {
            return(
                <div key={value.id} style = {{
                    backgroundColor: "#e8e7e7", 
                    marginTop: 5, 
                    marginBottom:5, 
                    padding: 10,
                    with: "100%"
                    }}>
                    <p>{value.name}</p>
                    <p>{value.email}</p>
                </div>
            )
        })}
    </div>
);
    }