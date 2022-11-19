import { Field, FieldArray, Formik, Form } from "formik"

import { StyledAddRingSchdeulesPage } from "./AddRingSchedule.styled"
import HeaderSecondary from "../../Header/HeaderSecondary"
import ActionButton from "../../ActionButton/ActionButton"
import Container from "../../Container/Container"
import Input from "../../Input/Input"

const AddRingSchedule = () => {
  return <>
    <HeaderSecondary />
    <Container>
      <StyledAddRingSchdeulesPage>
        <Formik
          initialValues={{
            lessons: [
              {
                start: '08:40',
                end: '10:00'
              }
            ]
          }}
          onSubmit={values => console.log(values)}
        >
          {({ values }) => (
            <Form>
              <FieldArray
                name="lessons"
                render={arrayHelpers => <>
                  {values.lessons.map((lesson, index) => (
                    <div className="range" key={index}>
                      <Input
                        caption="start"
                        className="start"
                        type="time"
                      ><Field name={`lessons.${index}.start`} type="time" /></Input>

                      <div>
                        <h2>Пара {index + 1}</h2>
                      </div>

                      <Input
                        className="end"
                        caption="end"
                        name={`lessons.${index}.end`}
                      ><Field name={`lessons.${index}.end`} type="time" /></Input>
                    </div>
                  ))}

                  {
                    values.lessons.length < 9 &&
                    <ActionButton
                      onClick={() => {
                        console.log('add');
                        arrayHelpers.push({start: '08:40', end: '10:00'})
                      }}
                    type="button"
                      className="add_button"
                    >+</ActionButton>
                  }

                </>}
              />

              {values.lessons.length === 9 &&
                <h2 style={{
                  textAlign: 'center',
                  marginTop: '2em',
                  fontWeight: 300
                }}>Прям все 9?)) Ну предположим)))</h2>
              }

              <ActionButton
                type="submit"
              >Готово</ActionButton>
            </Form>
          )}
        </Formik>

      </StyledAddRingSchdeulesPage>
    </Container>
  </>
}

export default AddRingSchedule