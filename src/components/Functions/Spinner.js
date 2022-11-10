import spinner from '../../assets/Spinner.gif';

function Spinner() {
    return (
        <div style={{ marginTop: "20%", display: 'flex', justifyContent: "center" }}>
            <img
                src={spinner}
                alt="Loading..."
            />
        </div>
    );
};

export default Spinner;