import { faEdit, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faAdd, faArrowLeft, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Image, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ConfirmPrompt from '../../../layouts/Admin/components/ConfirmPrompt';
import ProductImageDetail from './ProductImageDetail';
import config from '../../../config';
import {
    useCreateProductImage,
    useDeleteProductImage,
    useGetListProductImage,
    useUpdateProductImage,
} from '../../../hooks/api';
import ModalImage from './ModalImage';
import { useSetDefaultProductImage } from '../../../hooks/api/useProductImageApi';

const baseColumns = [
    {
        title: 'Id',
        dataIndex: 'id',
        width: 50,
    },
    {
        title: 'Hình ảnh',
        dataIndex: 'image',
        width: 200,
    },
    {
        title: 'Kích thước',
        dataIndex: 'size',
    },
    {
        title: 'Loại ảnh',
        dataIndex: 'contentType',
    },
    {
        title: 'Mặc định',
        dataIndex: 'isDefault',
    },
    {
        title: 'Thao tác',
        dataIndex: 'action',
    },
];

function transformData(dt, setIsDetailOpen, setIsDisableOpen, setModalImage, setDefault) {
    return dt?.map((item) => {
        return {
            key: item.id,
            id: item.id,
            image: <Image width={80} src={item.image} />,
            size: item.size,
            contentType: item.contentType,
            isDefault: (
                <div className="flex justify-start">
                    {item.isDefault ? (
                        <Tag className="w-fit uppercase" color="magenta">
                            Mặc định
                        </Tag>
                    ) : (
                        <Button
                            onClick={() => setDefault(item.id, item.productId)}
                            type="text"
                            className="text-blue-800 p-0"
                        >
                            Đặt mặc định
                        </Button>
                    )}
                </div>
            ),
            action: (
                <div className="action-btn flex gap-3">
                    <Button
                        className="text-blue-500 border border-blue-500"
                        onClick={() => setIsDetailOpen({ id: item.id, isOpen: true })}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    <Button
                        onClick={() =>
                            setModalImage({
                                title: 'Chỉnh sửa hình ảnh',
                                image: item.image,
                                edit: {
                                    index: item.id,
                                    isEdit: true,
                                },
                                isOpen: true,
                            })
                        }
                        className="text-green-500 border border-green-500"
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                        className="text-red-500 border border-red-500"
                        onClick={() => setIsDisableOpen({ id: item.id, isOpen: true })}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </div>
            ),
        };
    });
}

function Data({ setProductImageIds, setProductId }) {
    const navigate = useNavigate();
    const { productId } = useParams();
    const { isLoading, data } = productId
        ? useGetListProductImage({ productId })
        : { isLoading: null, data: null };
    const [tdata, setTData] = useState([]);
    const [isDetailOpen, setIsDetailOpen] = useState({ id: 0, isOpen: false });
    const [isDisableOpen, setIsDisableOpen] = useState({ id: 0, isOpen: false });
    const [modalImage, setModalImage] = useState({
        title: null,
        image: null,
        edit: {
            index: null,
            isEdit: false,
        },
        isOpen: false,
    });

    useEffect(() => {
        if (isLoading || !data) return;
        setProductId(productId);
        setTData(
            transformData(data?.data, setIsDetailOpen, setIsDisableOpen, setModalImage, setDefault),
        );
    }, [isLoading, data]);

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setProductImageIds(selectedRows.map((item) => item.id));
        },
        getCheckboxProps: (record) => ({
            name: record.name,
        }),
    };

    const mutationCreate = useCreateProductImage({
        success: () => {
            setModalImage({ image: null, edit: { index: null, isEdit: false }, isOpen: false });
        },
        error: (err) => {
            console.log(err);
        },
        obj: {
            id: isDisableOpen.id,
            params: { productId },
        },
    });

    const mutationUpdate = useUpdateProductImage({
        success: () => {
            setModalImage({ image: null, edit: { index: null, isEdit: false }, isOpen: false });
        },
        error: (err) => {
            console.log(err);
        },
        obj: {
            id: isDisableOpen.id,
            params: { productId },
        },
    });

    const mutationSetDefault = useSetDefaultProductImage({
        success: () => {
            navigate(`${config.routes.admin.product_image}/${productId}`);
        },
        error: (err) => {
            console.log(err);
        },
        obj: {
            id: null,
            params: { productId },
        },
    });

    const mutationDelete = useDeleteProductImage({
        success: () => {
            setIsDisableOpen({ ...isDisableOpen, isOpen: false });
        },
        error: (err) => {
            console.log(err);
        },
        obj: {
            id: isDisableOpen.id,
            params: { productId },
        },
    });

    const onAdd = async (image) => {
        const req = { image, productId };
        await mutationCreate.mutateAsync(req);
    };

    const onEdit = async (id, image) => {
        await mutationUpdate.mutateAsync({
            id: id,
            body: { image },
        });
    };

    const setDefault = async (id, productId) => {
        await mutationSetDefault.mutateAsync({
            id: id,
            body: { productId },
        });
    };

    const onDelete = async (id) => {
        await mutationDelete.mutateAsync(id);
    };

    const handleImage = (edit, image) => {
        if (edit.isEdit) {
            onEdit(edit.index, image);
        } else {
            onAdd(image);
        }
    };

    return (
        <div>
            <div className="p-4 bg-white mb-3 flex justify-between rounded-lg">
                <Button
                    onClick={() => navigate(config.routes.admin.product)}
                    className="border border-[--primary-color] text-[--primary-color]"
                    icon={<FontAwesomeIcon icon={faArrowLeft} />}
                >
                    Trở lại
                </Button>
                <Button
                    onClick={() =>
                        setModalImage({
                            title: 'Thêm hình ảnh cho sản phẩm',
                            image: null,
                            edit: {
                                index: null,
                                isEdit: false,
                            },
                            isOpen: true,
                        })
                    }
                    className="border border-blue-400 text-blue-400"
                    icon={<FontAwesomeIcon icon={faAdd} />}
                >
                    Thêm mới
                </Button>
            </div>
            <Table
                scroll={{
                    x: 'max-content',
                }}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={baseColumns}
                dataSource={tdata}
                pagination={false}
            />
            <ModalImage
                modalImage={modalImage}
                setModalImage={setModalImage}
                handleImage={handleImage}
            />
            {isDetailOpen.id !== 0 && (
                <ProductImageDetail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} />
            )}
            {isDisableOpen.id !== 0 && (
                <ConfirmPrompt
                    handleConfirm={onDelete}
                    content="Bạn có muốn xóa ảnh này?"
                    isDisableOpen={isDisableOpen}
                    setIsDisableOpen={setIsDisableOpen}
                />
            )}
        </div>
    );
}

export default Data;
