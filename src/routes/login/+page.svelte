<script>
// @ts-nocheck

    import Card from "sveltestrap/src/Card.svelte";
    import CardBody from "sveltestrap/src/CardBody.svelte";
    import CardHeader from "sveltestrap/src/CardHeader.svelte";
    import CardFooter from "sveltestrap/src/CardFooter.svelte";
    import Form from "sveltestrap/src/Form.svelte";
    import FormGroup from "sveltestrap/src/FormGroup.svelte";
    import Label from "sveltestrap/src/Label.svelte";
    import Input from "sveltestrap/src/Input.svelte";
    import Button from "sveltestrap/src/Button.svelte";
  </script>
  
  <div class="col-lg-5 mx-auto">
    <Card class="shadow-lg border-0 rounded-lg mt-5">
      <CardHeader>
        <h3 class="text-center font-weight-light my-4">Login</h3>
      </CardHeader>
      <CardBody>
        <Form method="POST">
          <FormGroup>
            <Label for="username" class="small mb-1">Username</Label>
            <Input
              class="py-4"
              type="username"
              name="username"
              id="username"
              placeholder="Enter username address" />
          </FormGroup>
          <FormGroup>
            <Label for="password" class="small mb-1">Password</Label>
            <Input
              class="py-4"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password" />
          </FormGroup>
          <FormGroup
            class="d-flex align-items-center justify-content-center mt-4 mb-0">
            <Button color="primary" type="submit" block>Login</Button>
          </FormGroup>
        </Form>
      </CardBody>
      <CardFooter class="text-center small">
        <a href="/register">Need an account? Sign up!</a>
      </CardFooter>
    </Card>
  </div>
  