import { z } from "zod"

export const validationSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "名前は必須です" })
    .min(4, { message: "4文字以上で入力してください" }),
  email: z
    .string()
    .nonempty("メールアドレスは必須です")
    .email({ message: "メールアドレスの形式で入力してください" }),
  password: z
    .string()
    .nonempty()
    .min(6, { message: "6文字以上で入力してください" }),
})
