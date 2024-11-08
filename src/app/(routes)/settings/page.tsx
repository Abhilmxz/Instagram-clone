import { TextField } from "@radix-ui/themes";

export default function SettingsPage() {
    return (
        <div>
            Settings
           <form action="">
            <TextField.Root placeholder="Search the docs…"/>
           </form>
        </div>
    );
};