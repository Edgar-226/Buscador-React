export default function SearchResultsItem({ name, email }) {
    return (
        <div style={{
            backgroundColor: "#e8e7e7",
            marginTop: 5,
            marginBottom: 5,
            padding: 10,
            with: "100%"
        }}>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}