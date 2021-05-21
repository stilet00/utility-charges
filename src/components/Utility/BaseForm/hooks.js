export function useForm() {
    const handleFocus = (e) => {
        if (e.target.tagName === "INPUT") {
            e.target.select()
        }
    };
    return {
        handleFocus
    }
}