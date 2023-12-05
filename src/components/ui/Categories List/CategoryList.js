import { getAllCategories } from "@/utilities/getAllCategories";
import { Box, Button, Stack } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
    const { data: allData } = await getAllCategories();

    return (
        <Box>
            <h1>Category list</h1>
            <Stack direction="column" sx={{ mt: 2.5 }} spacing={2}>
                {allData.map(category =>
                    <Button variant="outlined" key={category.id}>
                        <Link href={`news?category=${category.title}`}>{category.title}</Link>
                    </Button>
                )}
            </Stack>
        </Box >
    );
};

export default CategoryList;