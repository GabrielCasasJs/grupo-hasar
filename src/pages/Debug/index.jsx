import Text from '../../components/Text';

function Debug() {

    return (
        <div>
            <Text
              customSize="40px"
              color="secondary-greenStrong"
              weight="700"
              underline
              styles={{
                marginLeft: 30,
              }}
            >
               Debug
            </Text>
        </div>
    )
}

export default Debug;
