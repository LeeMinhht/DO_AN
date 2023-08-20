import classNames from "classnames/bind";
import styles from "./EditProfile.module.scss"
import { useEffect, useState } from "react";
import Button from "~/Component/Button";
import axiosClient from "~/scrips/healper/axiosClient";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles)

function EditProfile() {
    const [customer, setCustomer] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [fullname, setFullname] = useState("");
    const [image, setImage] = useState("");
    const [gender, setGender] = useState(true);
    const [identityCard, setIdentityCard] = useState("");
    const [license, setLicense] = useState("");
    const [address, setAddress] = useState({});

    const [addressId, setAddressId] = useState(1);
    const [addressList, setAddressList] = useState([]);

    const { cusUsername } = useParams();

    useEffect(() => {
        axiosClient.get(`http://localhost:8080/customers/findById/${cusUsername}`)
          .then((response) => {
            const data = response;
            setCustomer(data);
          })
          .catch(() => {
            console.log('không tìm thấy user')
          });
      }, [cusUsername]);

    //tìm kiếm all Address
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/address/findAll`)
            .then((response) => {
                const data = response;
                setAddressList(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, []);
    //Tìm kiếm address theo addressId
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/address/findById/${addressId}`)
            .then((response) => {
                const data = response;
                setAddress(data);
                console.log(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, [addressId]);

    const handle1email = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setEmail(inputValue)
        }
    }
    const handlePhone = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setPhone(inputValue)
        }
    }

    const handleFullanme = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setFullname(inputValue)
        }
    }
    const handleGender = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setGender(inputValue)
        }
    }

    const handleAddress = (e) => {
        const inputValue = e.target.value;  
        if (!inputValue.startsWith(' ')) {
            setAddressId(inputValue)
        }
    }

    const handleIdentityCard = (e) => {
        const inputValue = e.target.value;  
        if (!inputValue.startsWith(' ')) {
            setIdentityCard(inputValue)
        }
    }

    const handleLicense = (e) => {
        const inputValue = e.target.value;  
        if (!inputValue.startsWith(' ')) {
            setLicense(inputValue)
        }
    }

    const submitEdit = () => {
        

        const newCustomer = {
            cusUsername: cusUsername,
            password: customer.password,
            email: email,
            phone: phone,
            fullname: fullname,
            image: customer.image,
            gender: customer.gender,
            identityCard: identityCard,
            license: license,
            address: address,
            cart: customer.cart,
            role: customer.role,
        }

        axiosClient.put(`http://localhost:8080/customers/update/${cusUsername}`, newCustomer)
            .then((response) => {
                const data = response;
                console.log(data)
                alert('sửa thông tin thành công')
            })
            .catch((error) => {
                console.log(error)
            });


    }

    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("module-register")}>
                <div className={cx("m-container")}>
                    <div className={cx("main-title")}>
                        <h4 className={cx("main-title-inf")}>Sửa thông tin</h4>
                    </div>
                </div>
                <div className={cx("register-container")}>
                    <div className={cx("content-register")}>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Username</h6>
                           
                            <div className={cx("col-left")}>
                                <div className={cx("line-form")}>
                                    <div className={cx("wrap-input")}>
                                        <input type="text" value={cusUsername} className={cx("input")} disabled></input>
                                    </div>
                                </div>
                            </div>
                        </div>

                      

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Email</h6>
                            <div className={cx("wrap-input")}>
                                <input type="text" className={cx("input")} value={email} onChange={handle1email}></input>
                            </div>
                        </div>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Số điện thoại</h6>
                            <div className={cx("wrap-input")}>
                                <input type="text" className={cx("input")} value={phone} onChange={handlePhone}></input>
                            </div>
                        </div>
                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Họ Tên</h6>
                            <div className={cx("wrap-input")}>
                                <input type="text" className={cx("input")} value={fullname} onChange={handleFullanme}></input>
                            </div>
                        </div>
                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Số chứng minh</h6>
                            <div className={cx("wrap-input")}>
                                <input type="text" className={cx("input")} value={identityCard} onChange={handleIdentityCard}></input>
                            </div>
                        </div>
                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Bằng lái xe</h6>
                            <div className={cx("wrap-input")}>
                                <input type="text" className={cx("input")} value={license} onChange={handleLicense}></input>
                            </div>
                        </div>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Địa chỉ</h6>
                            <div className={cx("wrap-input")}>
                            <select className={cx("input")} onChange={handleAddress}>
                                    {addressList.map((address, index) => {
                                        return (
                                            <option key={index} value={address.addressId}>{address.addressName}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>

                       


                    </div>
                    <div className={cx("btn-register-group")}>
                        <Button onClick={submitEdit} className={cx("btn-register")} primary green large>Cập nhật</Button>
                    </div>
                </div>

            </div>
            
        </div>
     );
}

export default EditProfile;