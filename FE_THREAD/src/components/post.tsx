import { ChangeEvent, useRef, useState } from "react";
import { Avatar, Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { BiImageAdd } from "react-icons/bi";

export default function Post() {
  const inputImage = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleOnChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const objUrl = URL.createObjectURL(e.target.files[0]);
      setPreviewImage(objUrl);
    }
  };

  return (
    <Box borderBottom="1px" borderX="1px" borderColor="gray.500" p={4} pt={8}>
      <Text fontSize="2xl" fontWeight="bold">
        Home
      </Text>
      <Flex alignItems="center" gap={2} mt={4}>
        <Avatar
          name="Bransyah Sultan"
          src="https://img.freepik.com/free-photo/beauty-people-emotions-summer-leisure-vacation-concept-tender-beautiful-asian-girl-white-dress-pointing-finger-upper-left-corner-inviting-take-look-new-promo-offer-pink-background_1258-59482.jpg?w=740&t=st=1702991448~exp=1702992048~hmac=a39b6e9640c658470fdcc3eb1bfee932a55425862f14b86dbf3aedef82fac833https://img.freepik.com/free-photo/beauty-people-emotions-summer-leisure-vacation-concept-tender-beautiful-asian-girl-white-dress-pointing-finger-upper-left-corner-inviting-take-look-new-promo-offer-pink-background_1258-59482.jpg?w=740&t=st=1702991448~exp=1702992048~hmac=a39b6e9640c658470fdcc3eb1bfee932a55425862f14b86dbf3aedef82fac833"
        />
        <Input ml={2} placeholder="What's on your mind?" variant="flushed" />
        <Button bg="transparent" w="80px" rounded="full">
          <label>
            <Icon color="#04a51e" fontSize="2xl" as={BiImageAdd} ml={2} />
            <input
              type="file"
              ref={inputImage}
              onChange={handleOnChangeImage}
              id="input-file"
              hidden
            />
          </label>
        </Button>
        <Button rounded="full" color="#04a51e" w="150px">
          Post
        </Button>
      </Flex>
      {previewImage && (
        <Box mt={4}>
          <img
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </Box>
      )}
    </Box>
  );
}
