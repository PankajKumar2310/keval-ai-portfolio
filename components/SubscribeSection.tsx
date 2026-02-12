
"use client";

export default function SubscribeSection() {
    const orange = "#FF7D32";

    return (
        <section style={{ padding: '60px 0', background: '#fff' }}>
            <div className="container px-4 px-lg-5">
                <div className="wow fadeInUp shadow-lg" data-wow-delay=".3s" style={{
                    background: orange,
                    borderRadius: '25px',
                    padding: '40px 60px'
                }}>
                    <div className="row align-items-center g-4">
                        <div className="col-lg-6">
                            <h2 style={{
                                color: '#fff',
                                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                                lineHeight: '1.2',
                                margin: 0,
                                fontWeight: 'bold'
                            }}>
                                Subscribe To Our Email Newsletter For Explorers!
                            </h2>
                        </div>
                        <div className="col-lg-6">
                            <form className="d-flex flex-column flex-md-row gap-3 justify-content-lg-end" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter You Email"
                                    className="border-0 shadow-sm"
                                    required
                                    style={{
                                        padding: '18px 30px',
                                        borderRadius: '100px',
                                        fontSize: '18px',
                                        width: '100%',
                                        maxWidth: '400px'
                                    }}
                                />
                                <button
                                    type="submit"
                                    className="border-0 shadow-sm"
                                    style={{
                                        background: '#fff',
                                        color: '#000',
                                        padding: '18px 45px',
                                        borderRadius: '100px',
                                        fontWeight: '700',
                                        fontSize: '18px'
                                    }}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
