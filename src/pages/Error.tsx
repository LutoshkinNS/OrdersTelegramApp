import {Button} from "@/shared/components/Button/Button.tsx";
import {useNavigate} from "react-router";

export const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center h-dvh p-4">
            <h2 className="text-xl font-bold mb-2">Ой! Что-то пошло не так</h2>
            <p className="text-center mb-3">Произошла непредвиденная ошибка</p>
            <Button
                className="font-normal text-base py-1 px-1 max-w-30"
                onClick={() => {
                    navigate("/");
                    window.location.reload();
                }}
            >
                На главную
            </Button>
        </div>
    );
};
