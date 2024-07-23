export default function Pagination({ page, setPage }) {
    return (
        <div>
            <button onClick={()=>setPage(page-1)}>Previous page</button>
            <button onClick={()=>setPage(page+1)}>Next page</button>
        </div>
    );
}