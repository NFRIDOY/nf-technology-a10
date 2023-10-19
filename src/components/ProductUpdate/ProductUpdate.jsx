import { useLoaderData } from "react-router-dom";


export default function ProductUpdate() {
    const productData = useLoaderData()
    console.log(productData)
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        console.log("Add Coffee");
        const form = e.target;

        const image = form.Image.value;
        const name = form.Name.value;
        const brandName = form.BrandName.value; // Should Be A number but string
        const type = form.Type.value;
        const price = form.Price.value;
        const shortDescription = form.ShortDescription.value;
        const rating = form.Rating.value;

        // Output
        console.log(image)
        console.log(name)
        console.log(brandName)
        console.log(type)
        console.log(price)
        console.log(shortDescription)
        console.log(rating)

        // Product object
        const newProduct = {
            image,
            name,
            brandName,
            type,
            price,
            shortDescription,
            rating
        }
        console.log(newProduct)

        fetch(`http://localhost:5000/updateProducts/${productData._id}`, {
        // fetch('https://brandshop-server-three.vercel.app/addProducts', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Product Added")
                }
                else {
                    alert("Product Add Failed")
                }
                console.log(data)
            })

        // Reset form
        // form.reset();
    }
    return (
        <div className="max-w-6xl mx-auto p-8 text-center">
            <div>
                <div className="bg-[#f0f4f0] p-10 space-y-10">
                    <h1 className="text-5xl font-bold">Add New Products</h1>
                    {/* <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p> */}
                    <form className="md:p-10" onSubmit={handleUpdateProduct}>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-y-6">
                            <div className="flex flex-col items-start w-full gap-3">
                                <label className="text-3xl font-bold">Image</label>
                                <input type="text" className="p-4 rounded-md w-full md:w-11/12  mr-0 " name="Image" placeholder="Image" />
                            </div>
                            <div className="flex flex-col items-start w-full gap-3">
                                <label className="text-3xl font-bold">Name</label>
                                <input type="text" className="p-4 rounded-md w-full md:w-11/12  mr-0 " name="Name" placeholder="Name" />
                            </div>
                            <div className="flex flex-col items-start w-full gap-3">
                                <label className="text-3xl font-bold">Brand Name</label>
                                <input type="text" className="p-4 rounded-md w-full md:w-11/12  mr-0" name="BrandName" placeholder="Brand Name" />
                            </div>
                            <div className="flex flex-col items-start w-full gap-3">
                                <label className="text-3xl font-bold">Type</label>
                                <input type="text" className="p-4 rounded-md w-full md:w-11/12  mr-0" name="Type" placeholder="Type" />
                            </div>
                            <div className="flex flex-col items-start w-full gap-3">
                                <label className="text-3xl font-bold">Price</label>
                                <input type="text" className="p-4 rounded-md w-full md:w-11/12  mr-0" name="Price" placeholder="Price" />
                            </div>
                            <div className="flex flex-col items-start w-full gap-3">
                                <label className="text-3xl font-bold">Short Description</label>
                                <input type="text" className="p-4 rounded-md w-full md:w-11/12  mr-0" name="ShortDescription" placeholder="Short Description" />
                            </div>
                            <div className="flex flex-col items-start w-full gap-3">
                                <label className="text-3xl font-bold">Rating</label>
                                <input type="text" className="p-4 rounded-md w-full md:w-11/12  mr-0" name="Rating" placeholder="Rating" />
                            </div>
                            <div className=" mt-12 flex flex-col items-start w-full gap-3">
                                <button className="btn btn-success p-4 rounded-md w-full md:w-11/12  mr-0 text-white" type="submit">Add Product</button>
                            </div>
                        </div>
                        {/* <div className="md:pr-10">
                            <div className="flex flex-col items-start w-full gap-3 my-6">
                                <label className="text-3xl font-bold"></label>
                                <input type="text" className="p-4 rounded-md mr-0 w-full" name="Photo" placeholder="Photo" />
                            </div>
                        </div> */}

                    </form>
                </div>
            </div>
        </div>
    )
}
