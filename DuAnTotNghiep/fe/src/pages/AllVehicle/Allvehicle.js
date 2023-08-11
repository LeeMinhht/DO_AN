import classNames from "classnames/bind";
import styles from './AllVehicle.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faCarSide, faGlobe, faLocationDot, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import ProductItem from "~/Component/ProductItem/ProductItem";
import { useEffect, useState ,useRef} from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import { Link } from "react-router-dom";
import Button from "~/Component/Button";

const cx = classNames.bind(styles)
function AllVehicle() {

    const [vehicles, setVehicles] = useState([])
    const [brands, setBrands] = useState([])
    const [vehicleType, setVehicleType] = useState(true)
    const [brandId, setBrandId] = useState(1)
    const [showForm, setShowForm] = useState(false);
    const [showForm2, setShowForm2] = useState(false);

    const buttonRef =useRef()

    const [buttonColor, setButtonColor] = useState("white");
    const [buttonColor2, setButtonColor2] = useState("white");
    const [colorBrand, setColorBrand] = useState("white");
    const [colorStyle, setColorStyle] = useState("white");


    useEffect(() => {
        axiosClient.get(`http://localhost:8080/vehicle/findByVehicleType/${vehicleType},${brandId}`)
            .then((response) => {
                const data = response;
                setVehicles(data);
                console.log(data)
            })
            .catch(() => {
                console.log('không tìm thấy vehicle')
            });
    }, [brandId, vehicleType]);

    //select all brand
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/brands/getAll`)
            .then((response) => {
                const data = response;
                setBrands(data);
                console.log(data)
            })
            .catch(() => {
                console.log('không tìm thấy brand')
            });
    }, [brandId, vehicleType]);

    const handleVehicleType = () => {
        setShowForm(true)
    }
    const submitHideFormDialog = () => {
        setShowForm(false)
    }


    const handleBrandId = () => {
        setShowForm2(true)
    }

    const submitHideFormDialog2 = () => {
        setShowForm2(false)
    }

    const handleBranId = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setBrandId(searchValue)
        }
        setColorBrand("#dafbe6");
    }
    const handleTypeVehicleFalse = () => {
        setButtonColor("#dafbe6");
        setButtonColor2("white");
        setColorStyle("#dafbe6")
        setVehicleType(false);


    }
    const handleTypeVehicleTrue = (e) => {
        setButtonColor2("#dafbe6");
        setButtonColor("white");
        setColorStyle("#dafbe6")
        setVehicleType(true);
    }
    const handClear = ()=>{
        setVehicleType(true)
        setBrandId(1);
        setColorStyle("white");
        setColorBrand("white")
    }

    return (
        <div className={cx('all-vehicle')}>
            <div className={cx('filter-section')}>
                <div className={cx('m-container')}>
                    <div className={cx('filter-container')}>
                        <div className={cx('filter-drop')}>
                            <div className={cx('list-drop')}>
                                <div className={cx('reset-item')}>
                                    <div className={cx('item-drop-wap')}>
                                        <div className={cx('wrap-svg')}>
                                            <button  className={cx('btn-clear')} onClick={handClear}>
                                                <FontAwesomeIcon icon={faArrowsRotate}></FontAwesomeIcon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('swiper-list-filter')}>
                                    <div className={cx('swiper-wrapper')}>
                                        <div className={cx('swiper-slide')} style={{ backgroundColor: colorStyle }}>
                                            <Link onClick={handleVehicleType}>
                                                <div className={cx('item-dropdown')}>
                                                    <div className={cx('item-drop-wap')}>
                                                        <div className={cx('wrap-svg')}>
                                                            <FontAwesomeIcon icon={faCarSide} />
                                                        </div>
                                                        <p>Loại xe</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className={cx('swiper-slide')} style={{ backgroundColor: colorBrand }}>
                                            <Link onClick={handleBrandId} >
                                                <div className={cx('item-dropdown')}>
                                                    <div className={cx('item-drop-wap')}>
                                                        <div className={cx('wrap-svg')}>
                                                            <FontAwesomeIcon icon={faGlobe} />
                                                        </div>
                                                        <p>Hãng xe</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={cx('swiper-slide')}>
                                            <div className={cx('item-dropdown')}>
                                                <div className={cx('item-drop-wap')}>
                                                    <div className={cx('wrap-svg')}>
                                                        <FontAwesomeIcon icon={faShieldAlt} />
                                                    </div>
                                                    <p>Bảo hiểm chuyến đi</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('swiper-slide')}>
                                            <div className={cx('item-dropdown')}>
                                                <div className={cx('item-drop-wap')}>
                                                    <div className={cx('wrap-svg')}>
                                                        <FontAwesomeIcon icon={faLocationDot} />
                                                    </div>
                                                    <p>Giao xe tận nơi</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* list car */}
            <div>
                <div className={cx('list-car-section')}>
                    <div className={cx('scroll-fix')}>
                        <div className={cx('m-container')}>
                            <div className={cx('col4-mg20-list-car')}>
                                {vehicles.map((vehicle, index) => {
                                    return (
                                        <ProductItem key={index} vehicle={vehicle} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* show form dialog */}
            {showForm ? (
                <div className={cx('dialog')}>
                    <div className={cx('modal-backdrop')}></div>
                    <div className={cx('fade-in-modal')}>
                        <div className={cx('modal-dialog')}>
                            <div className={cx('modal-content')}>
                                <div className={cx('modal-header')}>
                                    <Button className={cx('close')} onClick={submitHideFormDialog}>
                                        <span aria-hidden="true">×</span>
                                        <span class="sr-only"></span>
                                    </Button>

                                    <h5>Loại xe</h5>



                                </div>
                                <div className={cx('modal-body')}>
                                    <div className={cx('confirm-body')}>
                                        <div className={cx('vehicle-type')}>
                                            {/* <input type="radio" name="vehicleType" value={true} onChange={handleTypeVehicleTrue}></input> */}
                                            <button className={cx('btn-vehicle-type')} style={{ backgroundColor: buttonColor }} onClick={handleTypeVehicleFalse}>
                                                <label >
                                                    <div className={cx('vehicle-type-item')}>
                                                        <div className={cx('vehicle-type-item-img')}>
                                                            <img src="https://n1-cstg.mioto.vn/m/vehicle-types/4-mini-v2.png"></img>
                                                        </div>
                                                        <p className={cx('name')}>4 chỗ</p>
                                                    </div>
                                                </label>
                                            </button>
                                        </div>
                                        <div className={cx('vehicle-type')}>
                                            <button  className={cx('btn-vehicle-type')} style={{ backgroundColor: buttonColor2 }} onClick={handleTypeVehicleTrue} >
                                                <label >
                                                    <div className={cx('vehicle-type-item')}>
                                                        <div className={cx('vehicle-type-item-img')}>
                                                            <img src="https://n1-cstg.mioto.vn/m/vehicle-types/7-mpv-v2.png"></img>
                                                        </div>
                                                        <p className={cx('name')} >7 chỗ</p>
                                                    </div>
                                                </label>
                                            </button>
                                        </div>

                                        <div className={cx('vehicle-type')}>
                                            <button  className={cx('btn-vehicle-type')} style={{ backgroundColor: "white" }}>
                                                <label >
                                                    <div className={cx('vehicle-type-item')}>
                                                        <div className={cx('vehicle-type-item-img')}>
                                                            <img src="https://n1-cstg.mioto.vn/m/vehicle-types/5-suv-v2.png"></img>
                                                        </div>
                                                        <p className={cx('name')}>5 chỗ</p>
                                                    </div>
                                                </label>
                                            </button>
                                        </div>

                                        <div className={cx('vehicle-type')}>
                                            <button  className={cx('btn-vehicle-type')} style={{ backgroundColor: "white" }}>
                                                <label >
                                                    <div className={cx('vehicle-type-item')}>
                                                        <div className={cx('vehicle-type-item-img')}>
                                                            <img src="https://n1-cstg.mioto.vn/m/vehicle-types/pickup-v2.png"></img>
                                                        </div>
                                                        <p className={cx('name')}>Bán tải</p>
                                                    </div>
                                                </label>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (null)}

            {/* show form 2 */}
            {showForm2 ? (
                <div className={cx('dialog')}>
                    <div className={cx('modal-backdrop')}></div>
                    <div className={cx('fade-in-modal')}>
                        <div className={cx('modal-dialog')}>
                            <div className={cx('modal-content')}>
                                <div className={cx('modal-header')}>
                                    <Button className={cx('close')} onClick={submitHideFormDialog2}>
                                        <span aria-hidden="true">×</span>
                                        <span class="sr-only"></span>
                                    </Button>

                                    <h5>Hãng xe</h5>



                                </div>
                                <div className={cx('modal-body')}>
                                    <div className={cx('confirm-body')}>
                                        {brands.map((brand, index) => {
                                            return (
                                                <div className={cx('vehicle-make')}>

                                                    <div className={cx('custom-radio')}>
                                                        <input className={cx('radio-btn')} type="radio" name="brand" value={brand.brandId} onChange={handleBranId}></input>
                                                        <label>{brand.nameBrand}</label>

                                                    </div>

                                                </div>
                                            )
                                        })}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (null)}
        </div>
    );
}

export default AllVehicle;