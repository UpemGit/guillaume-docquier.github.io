import { String } from "utils";

export const Option = ({ name }) => (
    <div className="bg-verdigris pa2 dib pointer">
        <div className="flex items-center justify-center">
            <div>{String.capitalize(name)}</div>
        </div>
    </div>
);
