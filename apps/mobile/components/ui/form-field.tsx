import { View } from "react-native";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import type { TextInputProps } from "react-native";

type FormFieldProps<T extends FieldValues> = Omit<
  TextInputProps,
  "value" | "onChangeText"
> & {
  control: Control<T>;
  name: Path<T>;
  label?: string;
};

export function FormField<T extends FieldValues>({
  control,
  name,
  label,
  ...inputProps
}: FormFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View style={{ gap: 6 }}>
          {label ? <Text variant="label">{label}</Text> : null}
          <Input
            value={value ?? ""}
            onChangeText={onChange}
            onBlur={onBlur}
            style={
              error
                ? { borderColor: "#FF2747" }
                : undefined
            }
            {...inputProps}
          />
          {error?.message ? (
            <Text style={{ color: "#FF2747", fontSize: 13 }}>
              {error.message}
            </Text>
          ) : null}
        </View>
      )}
    />
  );
}
