import { StyleSheet, View } from "react-native";
import {
  Dialog,
  Portal,
  Subheading,
  useTheme,
  TextInput,
  Title,
  Button,
  Text,
  Divider,
} from "react-native-paper";
import React, { Component, createRef } from "react";
import axios from "axios";
import request from "../services/http/request";

class CustomDialog extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.count = parseInt("");
    this.state = {
      text: "",
      order: {},
      ready: false,
    };
  }

  onChangeText(text, prepareOrder) {
    this.setState({ text: text }, async () => {
      this.count = text;
      console.log("====================================");
      console.log(this.count);
      console.log("====================================");
    });
  }

  onOrder = async () => {
    if (this.state.order) {
      // console.log(this.state.order);
      // axios({
      //   baseURL: request.baseUrl,
      //   method: "POST",
      //   data: this.state.order,
      //   url: request.orders.create,
      // })
      //   .then((res) => {
      //     console.log(res.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    } else {
    }
  };

  render(props) {
    const {
      visibility,
      onDismiss,
      title,
      header,
      yesBtn,
      noBtn,
      handleNo,
      handleYes,
      prepareOrder,
    } = this.props;

    return (
      <View style={styles.container}>
        <Portal>
          <Dialog visible={visibility} onDismiss={onDismiss}>
            <Dialog.Title>
              <Text>{title}</Text>
            </Dialog.Title>
            <Divider />
            <Dialog.Content>
              <Title>{header}</Title>
              <TextInput
                ref={this.inputRef}
                label="count"
                value={this.state.text}
                onChangeText={(text) => {
                  this.onChangeText(text, prepareOrder);
                }}
                mode="outlined"
                underlineColor="black"
                keyboardType="numeric"
              />
            </Dialog.Content>
            <Dialog.Actions
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                mode="contained"
                onPress={async () => {
                  handleYes(this.state.text);
                  await prepareOrder(this.count);
                  onDismiss();
                }}
                style={{
                  width: 100,
                  backgroundColor: "dodgerblue",
                }}
              >
                {yesBtn}
              </Button>
              <Button
                mode="contained"
                onPress={async () => {
                  console.log("No");
                  handleNo();

                  onDismiss();
                }}
                style={{
                  backgroundColor: "dodgerblue",
                  width: 100,
                }}
              >
                {noBtn}
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  }
}

export default CustomDialog;

// const CustomDialog = ({
//   visible,
//   onDismiss,
//   title,
//   header,
//   content,
//   yesBtn,
//   noBtn,
//   handleNo,
//   handleYes,
//   prepareOrder,
// }) => {
//   const theme = useTheme();
//   const [text, setText] = useState("");

//   return (
//     <View style={styles.container}>
//       <Portal theme={theme}>
//         <Dialog visible={visible} onDismiss={onDismiss}>
//           <Dialog.Title>
//             <Text
//               style={{
//                 fontFamily: theme.fonts.light.fontFamily,
//               }}
//             >
//               {title}
//             </Text>
//           </Dialog.Title>
//           <Divider />
//           <Dialog.Content>
//             <Title
//               style={{
//                 fontFamily: theme.fonts.light.fontFamily,
//               }}
//             >
//               {header}
//             </Title>
//             <TextInput
//               label="count"
//               value={text}
//               onChangeText={(text) => {
//                 setText(text);
//                 prepareOrder();
//                 console.log("====================================");
//                 console.log(text);
//                 console.log("====================================");
//               }}
//               mode="outlined"
//               underlineColor="black"
//               keyboardType="numeric"
//             />
//           </Dialog.Content>
//           <Dialog.Actions
//             style={{
//               flexDirection: "row-reverse",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <Button
//               mode="contained"
//               onPress={() => {
//                 console.log("yes");
//                 handleYes(text);
//                 onDismiss();
//               }}
//               style={{
//                 width: 100,
//                 backgroundColor: "dodgerblue",
//               }}
//             >
//               {yesBtn}
//             </Button>
//             <Button
//               mode="contained"
//               onPress={() => {
//                 console.log("No");
//                 handleNo();
//                 onDismiss();
//               }}
//               style={{
//                 backgroundColor: "dodgerblue",
//                 width: 100,
//                 borderRadius: theme.roundness,
//               }}
//             >
//               {noBtn}
//             </Button>
//           </Dialog.Actions>
//         </Dialog>
//       </Portal>
//     </View>
//   );
// };

// export default CustomDialog;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
});
